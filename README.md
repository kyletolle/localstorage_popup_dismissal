# LocalStorage Popup Dismissal

This project explores how to use LocalStorage to remember whether a popup was dismissed by the user. The popup has a close button. When it's clicked, a key in LocalStorage is set to indicate it was dismissed. This key is used on subsequent loads to make sure the popup is never shown again.

There's also a button that makes clearing LocalStorage quick and easy.

## Running

Start a HTTP server in the project's folder with

```
ruby -run -e httpd . -p 8000
```

Then visit http://localhost:8000 in your browser.
