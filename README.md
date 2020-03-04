# @leveluptuts/motion-elements

# Motion Elements

![Mr Wave On ](https://media3.giphy.com/media/JfitEsaTduKME/giphy.gif?cid=790b761122f3c5cd6b97584b994b9277159214ab2fea8be7&rid=giphy.gif)

## Demo

## Install

```bash
yarn add @leveluptuts/motion-elements
```

## Usage

### The Syntax

```jsx
import { Accordion } from '@leveluptuts/motion-elements';

...
<Accordion>
	<p>Another example</p>
</Accordion>
...
```

### More options

```jsx
import React, { useState } from 'react';
import { Accordion } from '@leveluptuts/motion-elements';

const App = () => {
	const [isToggled, setToggle] = useState(true);
	return (
		<div>
			<button onClick={() => setToggle(prev => !prev)}>Toggle</button>
			<Accordion isToggled={isToggled} useButton={false}>
				<p>Some text.</p>
			</Accordion>
		</div>
	)
```

## API

### Accordion

The parent of an array of components

| Prop      | Type       | Default        | Description                                                   |
| --------- | ---------- | -------------- | ------------------------------------------------------------- |
| children  | Components |                | An array of React Components                                  |
| isToggled | Boolean    |                | OPTIONAL \_ The bool that toggles the accordion               |
| useButton | Boolean    | (data) => data | OPTIONAL \_ if you want to bring your own b, byob if you will |

## Contributing

`yarn`
`yarn start`

#### (in another tab) to run example

`cd example`
`yarn`
`yarn start`

## Prior Art and Inspirations

This lib is just basic wrappers around https://www.framer.com/motion/
