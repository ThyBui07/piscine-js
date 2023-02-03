const currify = (fn) => {
    return (...args) => {
      if (args.length >= fn.length) {
        return fn(...args);
      } else {
        return (...moreArgs) => currify(fn)(...args, ...moreArgs);
      }
    }
  }