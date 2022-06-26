<div align="center">
<h1>Simple Review </h1>
</div>

# Simple Review

Note: If you enjoy the package, I would appreciate and be very grateful if you endorse me on [LinkedIn](https://www.linkedin.com/feed/) 😇, because it would help me tremendously.

Take a look at the docs and examples on [simpleCode](https://simple-code.netlify.app/review/intro.html)

Take a look at the example on [codepen](https://codepen.io/maxrpark/pen/zYpYpKB).

This package is really simple to use and you can have a stars review ready to use but will customizable features too.

All you need to do is to create a section or div tag with the class **_SimpleReview_**, adding an id is optional but recommended.

## Installation

```bash
npm i simplereview
```

## Usage

### Register the packeget

```js
import simplereview from "simplereview";
```

or

```js
import simplereview from "./node_modules/simplereview/index.js";
```

#### Javascript

After registering the package inside your javascript file you just need to iniciate the package like this:

```js
simplereview();
```

##### Don't forget

Your javascript file must be type="module".

#### Frameworks

For static data you can iniciate the package when the component is mouting. If you are going to use it with dynamic data read **_Dynamic data_** section at the end of file.

## Template

### Simple use

Create a Div or Section tag with a class of simpleReview

```html
<div class="simpleReview"></div>
```

You don't need to add anything else to display the stars but it is recommended that you also add a unique id, especially if you are going to have more than one review per page.

Also adding an id will give to the change interact with the review.

```html
<div class="simpleReview" id="review1"></div>
```

> **Note:** For more options see **_Params section_** at the bottom.

## Get the value of the rating

If you want to get the value of the review you can access it by selecting the element and getting the attributes.totalrating.value.

example

```js
const reviewOne = document.querySelector("#review1");
```

```js
let value = reviewOne.attributes.totalrating.value;
```

You can attach a click event to the review container or get the value after clicking on a buttom

### click event on the review container

```js
reviewOne.addEventListener("click", () => {
    let value = ratingOne.attributes.totalrating.value;
    console.log(value);
});
```

### click event on a buttom

```js
const btn = document.querySelector("#btn1");

ratingOne.addEventListener("click", () => {
    let value = ratingOne.attributes.totalrating.value;
    console.log(+value);
});
```

## Params

**_SimpleReview_** have some params so you can to customize the way it look and how it works.

### Styles

**_SimpleReview_** has a defaul value of :

```css
display: flex;
justify-content: center;
align-items: center;
```

If you want to position the container some where else you can target your id in the css or wrap the **_SimpleReview_** div in another div it also recommend.

### Color options

**selectedColor** for the selected stars

**baseSelectedColor** for the unselected stars

example

```html
<div class="simpleReview" baseSelectedColor="red" selectedColor="black"></div>
```

### Local Storage

In case you want to store the review value on the local storage you can do so by adding ls="true".

This will save the value of the rating on the localStorage with the name of your id.

The value of the review will be there next time you visit the page or refresh it.

```html
<div class="simpleReview" id="rating1" ls="true"></div>
```

You can also get the value from the local storage by querying the id.:

example

```js
const ratingLS = localStorage.getItem("rating1");
```

### View Result

If you want to show the result or specific value in the review you can add resultValue with a number from 1 to 5.

example

```html
<div class="simpleReview" resultValue="3"></div>
```

> It will show 3 stars selected out of 5.

resultValue will make the review static, the value can not be updated if you click on it.

### Params table

| Param             | Description                   | Default | Notes         |
| ----------------- | ----------------------------- | ------- | ------------- |
| selectedColor     | Color of the selected stars   | #F5D547 | RGB hex name  |
| baseSelectedColor | Color of the unselected stars | #C0C5C1 | RGB hex name  |
| ls                | Save to localStorage          | false   | true or false |
| resultValue       | Display review resilt         | false   | From 1 to 5   |

### Example

```html
<div
    class="simpleReview"
    baseSelectedColor="red"
    selectedColor="black"
    ls="true"
></div>
```

## Dynamic data

To use Simple Review with dynamic data, you need to initiate the package after you get the data. For example in plain javascript you need to do this:

1. Select the container
2. Fetch the data
3. After you get the data, you can map over it and create the slides
4. Initiate the package

You can adapt this to your favorite framework.
