const obj = {
    property11: {
      property22: {
        property31: 31,
        property32: 32
      },
    },
    property12: 12,
    property13: {
      property41: 41,
      property42: 42
    },
    property14: 14,
    property15: {
      property51: 51,
      property52: 52
    },
  };
  
  const project = {
    property11: {
      property22: null
    }
  }
    
  const projectFunc = (obj, projection)=> {
      let projectedObj = {}
      for(let key in projection) {
          projectedObj[key] = obj[key];
      }
      return projectedObj;
  }
  
  console.log(projectFunc(obj, project))