const baseApiUrl = process.env.NODE_ENV === "production" 
? 'http://localhost:1337' 
: 'http://localhost:1337';

export default baseApiUrl;