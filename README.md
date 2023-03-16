## Change Image Loading colors
go to svelte-image main.js file and change these.
```javascript
trace: {
    background: "#954B30", //Change this one
    color: "#B46A0F", // And this one
    threshold: 120,
  },
```
Also replace trace to blur here:
```javascript
  placeholder: "blur", // It's "trace" by default
```