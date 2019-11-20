const express = require('express');
const searchRouter = express.Router();

function router(nav){
    searchRouter.route('/')
        .get((req,res)=>{

            
            
    router.post('/search',(req,res)=>{                  //search
    console.log(req.body)
    studentModel.find(req.body, (error,data)=>{
        if(error)
        {
            throw error;

        }
        else
        {
            res.send(data)
            res.render(
                'search',
                {
                    nav,
                    title:'Search Student'
                }
            );
        };
        })
    })
})
            

    searchRouter.route('/save')
        .post((req,res)=>{
            console.log(req.body);
        });

    return searchRouter;
}

module.exports = router;