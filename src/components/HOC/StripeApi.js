import React from 'react';

export function callStripe(WrappedComponent, publicKey, secretKey) {
 
    const request = async (route, key, method, postData) => {
        const dataStr = Object.keys(postData).map( k => {
          return `${k}=${postData[k]}`
        }).join('&');
  
        const response = await fetch(`https://api.stripe.com/v1/${route}`, {
          method: method,
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${key}`,
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: dataStr
        });
  
        return await response.json();
      }

    return class extends React.Component {
        postPublic(route, postData) {
            return request(route, publicKey, 'POST', postData);
        }

        postSecret(route, postData) {
            return request(route, secretKey, 'POST', postData);
        }
        
        render() {
            return <WrappedComponent 
                postPublic={this.postPublic} 
                postSecret={this.postSecret} 
                {...this.props}/>
        }
    }
}