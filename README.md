# Password Generator

![screen recording](https://media.giphy.com/media/CJanoGmrouCiGnYcvi/giphy.gif)

#### project notes

1. HTML

- div container
- h1: Password Generator
- div + copy icon(font awesome)
- p: Password Length + input type: number
- p: Include uppercase letters + checkbox
- p: Include lowercase letters + checkbox
- p: Include numbers + checkbox
- p: Include symbols + checkbox
- button: Generate Password

2. CSS

3. JavaScript

- generate characters like uppercase/lowercase letters, numbers, symbols
- pick n length of characters based on the input box and checkbox
- generate button click event => show on the div box
- copy button + alert

* Challenge from Brad Traversy & Florin Pop on Udemy '50 Projects in 50 Days'

#### Takeaways from the instructor

1. HTML

- span for the result display area
- a div wrapped all the options

2. CSS

- for the result display area, word-wraop: break-word, max-width: calc(100% - 40px) preventing from overlapping because of the copy icon(40px) on the right

3. JavaScript

- made functions that generate random character for each options using String.fromCharCode() and put them in an object const
- length value is string, to change it to a number put + before the value
- for the checked items used .filter() + Object.values()
- need something when no options checked
- for the copy part, return null when no password
