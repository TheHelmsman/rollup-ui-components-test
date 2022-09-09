# vue 3 Component Library

## Project setup

Clone the repo
```shell
$ git clone git@github.com:TheHelmsman/vue3-component-library.git
```

### Run
```
$ yarn install
```

### Compiles and runs on local webserver
```
$ yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Build Library
```
yarn run build:js
```

### Build Library With Separate Css file
```
yarn build:js_css
```

### Lints and fixes files
```
yarn lint
```


## Usage Of Components Built
**As Component**
```
  import { TestWorld } from 'vue3-component-library/dist/esm/SESEButton';
  ...
  components:{
    SESEButton
  }
```

**As Plugin**
```
  import { SESEButton } from 'vue3-component-library';
    ...
  app.use(SESEButton)
```
