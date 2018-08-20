<p align="center" id="top">
	<a href="https://www.npmjs.com/package/quick-srt"><img src="https://cdn.abraham.gq/projects/quick-srt/quick-sort.gif"></a>
	<br>
	<br>
	<br>
	<a href="https://www.npmjs.com/package/quick-srt"><b>quick-srt</b></a>
	: Quick Sort Algorithm Implementation
</p>

<p align="center">
	<!-- Travis CI -->
	<a href="https://travis-ci.org/abranhe/quick-srt"><img src="https://img.shields.io/travis/abranhe/quick-srt.svg?logo=travis" /></a>
	<!-- LICENSE -->
	<a href="https://github.com/abranhe/quick-srt/blob/master/LICENSE"><img src="https://img.shields.io/github/license/abranhe/quick-srt.svg" /></a>
	<!-- NPM Version -->
	<a href="https://www.npmjs.com/package/quick-srt"><img src="https://img.shields.io/npm/v/quick-srt.svg" /></a>
	<!-- @abranhe -->
	<a href="https://github.com/abranhe"><img src="https://abranhe.com/badge.svg"></a>
	<!-- Cash me -->
	<a href="https://cash.me/$abranhe"><img src="https://cdn.abraham.gq/badges/cash-me.svg"></a>
	<!-- Patreon -->
	<a href="https://www.patreon.com/abranhe"><img src="https://cdn.abraham.gq/badges/patreon.svg" /></a>
	<!-- Paypal -->
	<a href="https://paypal.me/abranhe/10"><img src="https://cdn.abraham.gq/badges/paypal.svg" /></a>
</p>

# Overview

Quicksort is an efficient sorting algorithm, serving as a systematic method for placing the elements of an array in order. Developed by Tony Hoare in 1959, and published in 1961, it is still a commonly used algorithm for sorting. When implemented well, it can be about two or three times faster than its main competitors, merge sort and heapsort.

[Read More ...](https://en.wikipedia.org/wiki/Quicksort)

# Install

```
npm install quick-srt
```

# Usage

```js
const quickSort = require('quick-srt');

let numsArr = [46, 24, 33, 10, 2, 81, 50];
console.log(quickSort(numsArr));
// => [ 2, 10, 24, 33, 46, 50, 81 ]

let lettersArr = ['d', 'h', 'z', 'a', 'r', 'b', 'i'];
console.log(quickSort(lettersArr));
// => [ 'a', 'b', 'd', 'h', 'i', 'r', 'z' ]

let wordsArr = ['happy', 'auto', 'energy', 'zoo', 'trigonometry', 'dog', 'foo'];
console.log(quickSort(wordsArr));
// => [ 'auto', 'dog', 'energy', 'foo', 'happy', 'trigonometry', 'zoo' ]
```

# API

## `quickSort(array)`

> Return a sorted array using quick sort algorithm

# Related

- [quick-srt-cli](https://github.com/abranhe/quick-srt-cli): CLI for this module
- [bubble-srt](https://github.com/abranhe/bubble-srt): Bubble Sort Algorithm Implementation
- [merge-srt](https://github.com/abranhe/merge-srt): Merge Sort Algorithm Implementation

# Team

|[![Carlos Abraham Logo](https://avatars3.githubusercontent.com/u/21347264?s=50&v=4)](https://19cah.com)|
| :-: |
| [Carlos Abraham](https://github.com/abranhe) |

# License

[MIT](https://github.com/abranhe/quick-srt/blob/master/LICENSE) License © [Carlos Abraham](https://github.com/abranhe/)
