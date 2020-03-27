export const slugTitle = (slug) => {
    let arrString = slug.split('_');
    return arrString[arrString.length-1];
}

export const setDate = () => {
  const date = new Date();
  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`;
};

export const fetcher = async (url, method, data) => {
  try {
      return new Promise(async (resolve, reject)=>{
          var init = {
              method: method,
              headers: {
              'Content-Type': 'application/json',
              },
          };

          if(data) init = {...init, body: JSON.stringify(data)};

          await fetch(url, {...init})
              .then(response => response.json())
              .then(data => {
                  resolve(data);
              })
              .catch(error => {
                  reject(error);
              });
        })
      
  } catch (error) {
     console.warn(error)
  }
};