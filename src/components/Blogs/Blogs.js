import React from 'react';

const Blogs = () => {
    return (
        <div className='text-center container my-4'>
            <h2 className='color fw-normal text-uppercase mb-3'>Difference between javascript and nodejs?</h2>
            <p style={{ fontSize: 18 }}>In order to understand the difference between javascript and node js first, we need to understand what is node js and what is javascript? let's started with javascript. JavaScript is a high level programming language like python. Modern JavaScript we can use client-side and server-side. but before node js, it was not possible to use javascript on the server-side. Now question is what is Nodejs? Nodejs is a javascript runtime. Now another question comes up what is runtime? runtime is like a engine where javascript code executed. before nodejs javascript only run in a web browser. But when node js comes up it was revolutionary. With the help of node js, we can run javascript code in our local machine also we can run javascript on the server.</p>
            <h2 className='color fw-normal text-uppercase mb-3'>When should you use nodejs and when should you use mongodb?</h2>
            <p style={{ fontSize: 18 }}>
                Node js is best for build heavy network application and it is best for input output incentive application. Node js is a single threaded non blocking. Node js is best when you heavily network calls in your application. let me give you a quick example when you built an application and that application thousands of user calling server at a time in that scenario nodejs is best because nodejs non blocking. Nodejs will take all server request and send to the queue once server give back to response nodejs will take all request from queue and get back to the user one by one. let's move to our next topic when should use mongodb. Mongodb is a non relational database. When you built an application very quick mongodb is best. mongodb is very flexible. Using mongodb you don't need to learn query language like mySql.
            </p>
            <h2 className='color fw-normal text-uppercase mb-3'>Differences between Sql and noSql databases.</h2>
            <p style={{ fontSize: 18 }}>
                Sql is relational database. Now question is what is relational database? Sql database data is a table format which is like row column structure. In Sql database all data related to each other using keys, ids all of that linking together all of data so that's why sql is very relational. Sql database is very strict to their schema and also sql database follow a language called query language. Sql database is very structured. In order to other side NoSQL database is very flexible. NoSql database is a non relational database. Non relational database means all data not linking together like relational database. NoSql database data is a json format which is document structure. NoSql database schema is very easy to update and manipulate also NoSql database is not follow query language.
            </p>
            <h2 className='color fw-normal text-uppercase mb-3'>What is the purpose of jwt and how does it work?</h2>
            <p style={{ fontSize: 18 }}>
                JWT Stands for JSON Web Token. JWT Authorize the user access to specific data and interact to micro services so in that way Authorize same user in different server. JWT also use for secure server and secure api. Now let's move to our next point how jwt work? When a user sign up or login server will issue a token for that user after that when user request to server token will send server after that server verify the token and back response from the server to user. JWT Token verify the user so that way api is more secure.
            </p>
        </div>
    );
};

export default Blogs;