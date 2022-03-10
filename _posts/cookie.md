---
title: Cookie Policy Banner
author: 'Vicky Vasilopoulou'
icon: 🍪
---

### Ingredients:

- TypeScript
- localStorage
- Theme-UI
- Hooks (useEffect, useState)

### Cooking Process:

Let’s make a functional component and also let’s create our useState as a boolean since we want the cookie banner to appear or disappear based on clicking the button.

We are going to use localstorage as well for these purposes.

Now when using localstorage the `setItem()` method is where you store your items.

On the function `handleAcceptance` we store on localstorage the cookie banner `‘cookie-banner’`, also the second variable could not be avoided because it takes two arguments — so the variable `visible` is added but will be used on that case.

When we use the useEffect hook basically we always want to render the banner once the component is rendered but only the first time we visit the page, so that’s why we don’t add a variable inside the []. When the UseEffect Hook is rendered with the `getItem()` method we check on the storage if that `cookie-banner` variable exists.

If it does as is on our if statement then make it visible for our first rendering, so we set it to true, since our initial state is false.

Our `handleAcceptance` function will be passed down on our onClick event and will be triggered once we click the button.

Now the important point is that React can also return null, so what we actually do on our last if statement is that if the cookie is visible then return null so when we had already seen it once it will not keep appearing for every rendering.

### Presentation:

```tsx

export const Cookie = (): JSX.Element | null => {

const [visible, setVisible] = useState<boolean>(false)

const handleAcceptance = () => {
  localStorage.setItem(‘cookie-banner’, ‘visible’)
  setVisible(false)
}
    useEffect(() => {
      const hasSeenCookie = localStorage.getItem(‘cookie-banner’)
        if (!hasSeenCookie) {
            setVisible(true)
        }
     }, [])
        if (!visible) {
     return null
    }

return (
    <Flex
        sx={{ position: ‘fixed’,
        bottom: 0,
        left: 0,
        right: 0,
        px: 4,
        py: 4,
        bg: ‘secondary’,
        textAlign: ‘center’,
        justifyContent: ‘center’,
        alignItems: ‘center’,
    }}>
    <Text
        as=”div”
        sx={{ alignSelf: ‘center’,
        fontSize: 5,
        color:‘white’,
        mr: 4 }}
    >
         This website uses cookies to enhance the user experience
    </Text>
    <Button type=”button” onClick={handleAcceptance}>
        I understand
    </Button>
    </Flex>
)
 }

```

Happy Cooking
