# fastlocalstorage
Fast storage is a cache layer over localStorage, which makes read speeds 10x faster

Behind the scenes, we are using localStorage execpt when we try to read/write the data to the storage, we create a cache on memory

## Installation

```
npm install --save fastlocalstorage
```

In your code

```
import fastlocalstorage from "fastlocalstorage"
window.fastLocalStorage = fastlocalstorage

```

## Usage

It is exactly the same as localStorage
1. window.fastLocalStorage.getItem('key')
1. window.fastLocalStorage.setItem('key',val)
1. window.fastLocalStorage.clear()
1. window.fastLocalStorage.removeItem('key')


## Speed 

Write speed is about the same
Read speed is 10x faster

There are few tests also added you can run them and check in a browser env