# @imgcook/generator-react

Generate a new project from a react template.

## Develop

```javascript
/**
 * @name plugin example
 * @param option: { data, filePath, config }
 * - data: module and generate code Data
 * - filePath: Pull file storage directory
 * - config: cli config
 */

const pluginHandler = async options => {
  let { data } = options;
  // body...
  return data;
};

module.exports = (...args) => {
  return pluginHandler(...args).catch(err => {
    console.log(err);
  });
};
```

## Reference Example

- Example 1：https://github.com/imgcook-plugin/plugin-react-mod-add
- Example 2：https://github.com/imgcook-plugin/plugin-generate
- Example 3: https://github.com/imgcook-plugin/plugin-images