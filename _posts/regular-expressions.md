# Regural Expressions CheatSheet

## Basics

Regular expressions always start with / / and g is for global.

- / expression /, i.e /[A-Z]+/g basic format
- / name\?\*\\/ escape special characters with backslashes
- () group with parentheses
- | logical OR

## Character classes

- \w word \d digit \s whitespace (tabs, line breaks)
- \W NOT word \D NOT digit \S NOT whitespace
- \t tabs, \n line breaks
- . any character

## Anchors

- ^world start of the strings
- world$ end of the string

## Brackets

- [xyz] match any x, y, z
- [^xyz] NOT x, y, z
- [B-X] match any capital letters between B & X.

## Quantification

- viki|maria match viki or maria
- z{n} n occurrences
- z\* zero or multiple occurrences
- z+ one or multiple occurrences
- z{min, max} min/max occurrences
- z? zero or one occurrences

By Vasiliki Vasilopoulou
