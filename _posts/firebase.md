---
title: Firebase Authentication with React and TypeScript
author: 'Vicky Vasilopoulou'
icon: 👋
---

Hi guys,

This is a step by step guide on how you can build and authentication login form with firebase and react. I have done it a couple of times and I want to share my experience as I struggled when I first did it.

You can also access some parts of the code on these links:

- [Github Link](https://github.com/Viki-Robles/commentto)
- [CodesAndSandbox](https://codesandbox.io/s/form-yup-typescript-e7yum)

So if you dont know how to use Firebase is fine they have really good documentation but first you need to create a new project on the ewebsite and also create your account.

Once you create an account you can go to the console and create a new project as picture shows below.

![Alt Text](/picsone.png)

Insert the name of your project and the rest of the details that it requests.

Then on the right side below the subheader 'Get started by adding Firebase to your app' click the third icon which is the web(</>) symbol. Click to create a web app in this case.

You can access those keys anytime simply when you click on project settings as you see below.

![Alt Text](/firebase.svg)

You need to enable on the project the email and password authentication for email/password.
Simply click on the `Authentication` tab and select email/password `Enabled`.

For our project we will use React and TypeScript.

Then based on firebase documentation you need to link and connect your project.
For this app I am using firebase v9.

Now on your react app you need to install Firebase SDK and login. Install firebase and firebase tools on your machine.Then you initialise your app with firebase -init and follow the instructions from their documentation so that you can initialise your project that is on the cloud, is quite simple and straightforward. Then try and do firebase login it should redirect you and then it will mean that you are connected.
Once this is done, create a firebase.ts file.

Once you have properly connect your project to firebase you can create on your root of your project first a .env file and you have to add those variables:

Each value corresponds to the values you see from the picture above.

```js
REACT_APP_FIREBASE_API_KEY = ' ';
REACT_APP_FIREBASE_PROJECT_ID = '';
REACT_APP_FIREBASE_AUTH_DOMAIN = '';
REACT_APP_FIREBASE_APP_ID = '';
REACT_APP_FIREBASE_MESSAGING_SENDER_ID = '';
REACT_APP_FIREBASE_STORAGE_BUCKET = '';
```

```js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const FIREBASE_CONFIG = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  appId: process.env.REACT_APP_FIREBASE_ID,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
};

const firebaseApp = initializeApp(FIREBASE_CONFIG);

export const auth = getAuth(firebaseApp);
```

Then you create an AuthProvider file `Authprovider.ts`

```js

import React, {
  ReactNode,
  useEffect,
  useState,
  useContext,
  createContext,
} from 'react'
import { auth } from '../config/firebase'
import {
  Auth,
  UserCredential,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth'
import { MrDocRoles, MrDocContactType } from '../types/mrDocRoles'
import { MrDocUser } from '../types/users'

export interface AuthProviderProps {
  children?: ReactNode
}

export interface UserContextState {
  isAuthenticated: boolean
  isLoading: boolean
  user?: MrDocUser
  id?: string
  role?: MrDocRoles
  contactType?: MrDocContactType
}

export const UserStateContext = createContext<UserContextState>(
  {} as UserContextState,
)
export interface AuthContextModel {
  auth: Auth
  user: User | null
  signIn: (email: string, password: string) => Promise<UserCredential>
  signUp: (email: string, password: string) => Promise<UserCredential>
  sendPasswordResetEmail?: (email: string) => Promise<void>
}

export const AuthContext = React.createContext<AuthContextModel>(
  {} as AuthContextModel,
)

export function useAuth(): AuthContextModel {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [user, setUser] = useState<User | null>(null)

  function signUp(email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function signIn(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(auth, email, password)
  }
  function resetPassword(email: string): Promise<void> {
    return sendPasswordResetEmail(auth, email)
  }
  useEffect(() => {
    //function that firebase notifies you if a user is set
    const unsubsrcibe = auth.onAuthStateChanged((user) => {
      setUser(user)
    })
    return unsubsrcibe
  }, [])

  const values = {
    signUp,
    user,
    signIn,
    resetPassword,
    auth,
  }
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export const useUserContext = (): UserContextState => {
  return useContext(UserStateContext)
```

Then you need to wrap your App.tsx with the provider we just made like this:

```js

function App(): JSX.Element {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
         ..........

           .......
           <AuthProvider/>

```

Now are `signUp.tsx` file:

```js

mport React, { useState } from 'react'
import { Input, ThemeUIStyleObject, Grid, Button, Text, Alert } from 'theme-ui'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom'
import { FormGroup } from '../FormGroup/FormGroup'
import { DASHBOARD_PAGE_PATH, SIGN_IN_PAGE_PATH } from '../../config/paths'
import { useAuth } from '../../providers/AuthProvider'
import { passwordValidation } from '../../utils/passwordValidation/passwordValidation'
import { FormWrapper } from '../FormWrapper/FormWrapper'
import { Link } from 'react-router-dom'

interface SignUpFormValues {
  email: string
  password: string
  repeatPassword: string
}

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: passwordValidation,
  repeatPassword: Yup.string().when('password', {
    is: (val: string) => val && val.length > 0,
    then: Yup.string()
      .oneOf([Yup.ref('password')], 'Both passwords need to be the same')
      .required('Required'),
  }),
})

export interface SignUpProps {
  sx?: ThemeUIStyleObject
}

const SignUp = ({ sx }: SignUpProps): JSX.Element => {
  const { signUp } = useAuth()
  const [formError, setFormError] = useState<string>('')
  const [formSubmitting, setFormSubmitting] = useState<boolean>(false)
  const history = useHistory()

  return (
    <FormWrapper title="Create account" sx={{ ...sx }}>
      <Formik
        initialValues={{
          email: '',
          password: '',
          repeatPassword: '',
        }}
        onSubmit={async (values: SignUpFormValues) => {
          setFormSubmitting(true)
          try {
            await signUp(values.email, values.password)
            try {
              history.push(DASHBOARD_PAGE_PATH)
            } catch (error) {
              console.log(`🚀 ~ signup error`, error)
            }
          } catch (error) {
            console.log(error)
            setFormError(formError)
            setFormSubmitting(false)
          }
        }}
        validationSchema={SignUpSchema}
      >
        {({ getFieldProps }) => (
          <Form>
            <FormGroup label="Email address" name="email">
              <Input
                sx={{ borderColor: 'rgb(209, 218, 230)' }}
                {...getFieldProps('email')}
                id="email"
              />
            </FormGroup>
            <FormGroup label="Password" name="password">
              <Input
                sx={{
                  borderColor: 'rgb(209, 218, 230)',
                }}
                {...getFieldProps('password')}
                type="password"
                id="password"
              />
            </FormGroup>
            <FormGroup label="Repeat password" name="repeatPassword">
              <Input
                sx={{
                  borderColor: 'rgb(209, 218, 230)',
                }}
                {...getFieldProps('repeatPassword')}
                type="password"
                id="repeatPassword"
              />
            </FormGroup>
            <Grid>
              <Button type="submit" sx={{ mt: 1 }} variant="buttons.primary">
                Sign up
              </Button>
              <Link to={{ pathname: SIGN_IN_PAGE_PATH }}>
                <Text
                  sx={{
                    display: 'inline-block',
                    textDecoration: 'none',
                    textAlign: 'center',
                    margin: '0 auto',
                    fontSize: 2,
                    color: 'brand',
                  }}
                >
                  Do you already have an account? Please login in here.
                </Text>
              </Link>
            </Grid>
            {formError && <Alert variant="error">{formError}</Alert>}
          </Form>
        )}
      </Formik>
    </FormWrapper>
  )
}
export default SignUp
```

Now on our sign in component:
I am using Formik cause it has ready function and you write less code.. You can check it out here:

```js
import React, { useState } from 'react'
import { Input, Button, Grid, Text, ThemeUIStyleObject, Alert } from 'theme-ui'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { Form, Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { DASHBOARD_PAGE_PATH, SIGN_UP_PAGE_PATH } from '../../config/paths'
import { useAuth } from '../../providers/AuthProvider'
import { FormGroup } from '../../components/FormGroup/FormGroup'
import { FormWrapper } from '../FormWrapper/FormWrapper'

export interface SignInProps {
  sx?: ThemeUIStyleObject
}

interface SignInFormValues {
  email: string
  password: string
}

const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required').min(8).max(200),
})

export const SignIn = ({ sx }: SignInProps): JSX.Element => {
  const { signIn } = useAuth()
  const [formSubmitting, setFormSubmitting] = useState<boolean>(false)
  const [formError, setFormError] = useState<string>('')
  const history = useHistory()

  return (
    <FormWrapper title="Welcome back" sx={{ ...sx }}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={async (values: SignInFormValues) => {
          setFormSubmitting(true)
          try {
            await signIn(values.email, values.password)
            history.push(DASHBOARD_PAGE_PATH)
          } catch (error: unknown) {
            let errorMessage = 'error.unknown'
            if (typeof error === 'string') {
              errorMessage = error.toUpperCase()
            } else if (error instanceof Error) {
              errorMessage = error.message
            }
            setFormError(errorMessage)
            setFormSubmitting(false)
          }
        }}
        validationSchema={SignInSchema}
      >
        {({ getFieldProps }) => (
          <Form>
            <FormGroup label="You email address" name="email">
              <Input
                sx={{ borderColor: 'rgb(209, 218, 230)' }}
                {...getFieldProps('email')}
                id="email"
              />
            </FormGroup>
            <FormGroup label="Password" name="password">
              <Input
                sx={{ width: '400px', borderColor: 'rgb(209, 218, 230)' }}
                {...getFieldProps('password')}
                type="password"
                id="password"
              />
            </FormGroup>
            <Grid>
              <Button type="submit" sx={{ mt: 1 }} variant="buttons.primary">
                Log in
              </Button>
              <Link to={SIGN_UP_PAGE_PATH}>
                <Text
                  sx={{
                    display: 'inline-block',
                    color: 'brand',
                    textDecoration: 'none',
                    fontSize: 2,
                  }}
                >
                  Dont have an account? Please Sign up here.
                </Text>
              </Link>
            </Grid>
            <br />
            {formError && <Alert variant="error">{formError}</Alert>}
          </Form>
        )}
      </Formik>
    </FormWrapper>
  )
}
```
