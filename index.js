const PORT = 8080
'use strict';
const axios =require('axios')
const cheerio =require('cheerio')
const { response } = require('express')
const express =require('express')

const scrapizm = express()

const url = 'https://hiphopdx.com/news'

//test 2
// test tres
// quattro
axios(url)
.then(
    response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []
        let pic = $('.post-image rectangle');
        

        $('.news-info',html).each(function(){

            const title = $(this).find('p','title').html()
            const url = $(this).find('a').attr('href')
            const date = $(this).find('p[class=sub-label]').html().slice(7)
            const img = $(this).find('img').attr('src')


           articles.push({
               title,
               url,
               date,
               img,
           })

        }),
        console.log(articles)
        debugger;


        console.log('hey:', html );
    }
).catch(err => console.log(err))

scrapizm.listen(PORT, () => console.log('server running on PORT', PORT ))

