# Text formatting...
...for custom messages (**messages: {}**)

# How to use?
```javascript
new <Client>({
	messages: {
		cooldown: "this is example cooldown message in {command} ({cdTime})"
	}
})
```

# List
## Cooldown
- {command} = returning command name
- {cdTime} = returning cooldown time in seconds
### cooldown example
```javascript	
messages: {
	cooldown: "formatting {command} {cdTime}"
}
```