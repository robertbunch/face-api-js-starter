# Facial Recognition with JavaScript using face-api.js
### To start up the app:
1. run npm install in the root directory
2. run node on server.js
3. go to http://localhost:5000
### images in public were generated with fooocus. None are known to have any actual people in them

### [Face API Github](https://github.com/justadudewhohacks/face-api.js)

### Loading 4 primary models
``` javascript
    await Promise.all([
        faceapi.nets.ssdMobilenetv1.loadFromUri('./models'),
        faceapi.nets.faceLandmark68Net.loadFromUri('./models'),
        faceapi.nets.faceRecognitionNet.loadFromUri('./models'),
        faceapi.nets.ageGenderNet.loadFromUri('./models'),
    ])
```

### Some stock photos:
- [Ronaldo Wiki - https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/220px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/220px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg)
- [Ronaldo 2 Wiki - https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Cristiano_Ajax.jpg/170px-Cristiano_Ajax.jpg](https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Cristiano_Ajax.jpg/170px-Cristiano_Ajax.jpg)
- [Elon wiki - https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg/220px-Elon_Musk_Colorado_2022_%28cropped2%29.jpg](https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg/220px-Elon_Musk_Colorado_2022_%28cropped2%29.jpg)