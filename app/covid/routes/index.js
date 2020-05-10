const express = require('express');
const router = express.Router();
const controller   = require('../controller/index');

router.get("/get_brgy_status_ncr", (req, res, next) => {    
    controller.getbrgyNCR()
    .then(data=>{
        res.send(data);
    })
    .catch(next)
});

router.get("/get_ir_percity_ncr", (req, res, next) => {            
    let city = req.query.city || ""

    if(city==""){
        res.status(500).send("error query");
        return;
    }

    controller.getIRperCityNCR(city)
    .then(data=>{
        res.send(data);
    })
    .catch(next)
});

router.get("/download_covidstatus_ncr", (req, res, next) => {            
    let city = req.query.city || ""

    if(city==""){
        res.status(500).send("error query");
        return;
    }
    
    controller.donwloadCovidStatusNCR(city)
    .then(data=>{
        res.setHeader('Content-disposition', `attachment; filename=ecq_status_${city.replace(/ /g,"")}.csv`);
        res.set('Content-Type', 'text/csv');
        res.status(200).send(data);
    })
    .catch(next)
});

router.get("/get_brgy_status_davao", (req, res, next) => {    
    controller.getbrgyDavao()
    .then(data=>{
        res.send(data);
    })
    .catch(next)
});



router.get("/get_ir_percity_davao", (req, res, next) => {            
    let city = req.query.city || ""

    if(city==""){
        res.status(500).send("error query");
        return;
    }

    controller.getIRperCityDavao(city)
    .then(data=>{
        res.send(data);
    })
    .catch(next)
});


router.get("/download_covidstatus_davao", (req, res, next) => {            
    let city = req.query.city || ""

    if(city==""){
        res.status(500).send("error query");
        return;
    }
    
    controller.donwloadCovidStatusDavao(city)
    .then(data=>{
        res.setHeader('Content-disposition', `attachment; filename=ecq_status_${city.replace(/ /g,"")}.csv`);
        res.set('Content-Type', 'text/csv');
        res.status(200).send(data);
    })
    .catch(next)
});


router.get("/get_brgy_status_caraga", (req, res, next) => {    
    controller.getbrgyCaraga()
    .then(data=>{
        res.send(data);
    })
    .catch(next)
});



router.get("/get_ir_percity_caraga", (req, res, next) => {            
    let city = req.query.city || ""

    if(city==""){
        res.status(500).send("error query");
        return;
    }

    controller.getIRperCityCaraga(city)
    .then(data=>{
        res.send(data);
    })
    .catch(next)
});


router.get("/download_covidstatus_caraga", (req, res, next) => {            
    let city = req.query.city || ""

    if(city==""){
        res.status(500).send("error query");
        return;
    }
    
    controller.donwloadCovidStatusCaraga(city)
    .then(data=>{
        res.setHeader('Content-disposition', `attachment; filename=ecq_status_${city.replace(/ /g,"")}.csv`);
        res.set('Content-Type', 'text/csv');
        res.status(200).send(data);
    })
    .catch(next)
});

router.get("/get_brgy_status_region3", (req, res, next) => {    
    controller.getbrgyRegion3()
    .then(data=>{
        res.send(data);
    })
    .catch(next)
});

router.get("/get_ir_percity_region3", (req, res, next) => {            
    let city = req.query.city || ""
    if(city==""){
        res.status(500).send("error query");
        return;
    }
    controller.getIRperCityRegion3(city)
    .then(data=>{
        res.send(data);
    })
    .catch(next)
});


router.get("/download_covidstatus_region3", (req, res, next) => {            
    let city = req.query.city || ""

    if(city==""){
        res.status(500).send("error query");
        return;
    }
    
    controller.donwloadCovidStatusRegion3(city)
    .then(data=>{
        res.setHeader('Content-disposition', `attachment; filename=ecq_status_${city.replace(/ /g,"")}.csv`);
        res.set('Content-Type', 'text/csv');
        res.status(200).send(data);
    })
    .catch(next)
});


router.get("/get_brgy_status_region4a", (req, res, next) => {    
    controller.getbrgyRegion4A()
    .then(data=>{
        res.send(data);
    })
    .catch(next)
});

router.get("/get_ir_percity_region4a", (req, res, next) => {            
    let city = req.query.city || ""
    if(city==""){
        res.status(500).send("error query");
        return;
    }
    controller.getIRperCityRegion4A(city)
    .then(data=>{
        res.send(data);
    })
    .catch(next)
});


router.get("/download_covidstatus_region4a", (req, res, next) => {            
    let city = req.query.city || ""

    if(city==""){
        res.status(500).send("error query");
        return;
    }
    
    controller.donwloadCovidStatusRegion4A(city)
    .then(data=>{
        res.setHeader('Content-disposition', `attachment; filename=ecq_status_${city.replace(/ /g,"")}.csv`);
        res.set('Content-Type', 'text/csv');
        res.status(200).send(data);
    })
    .catch(next)
});

router.get("/get_brgy_status_region7", (req, res, next) => {    
    controller.getbrgyRegion7()
    .then(data=>{
        res.send(data);
    })
    .catch(next)
});

router.get("/get_ir_percity_region7", (req, res, next) => {            
    let city = req.query.city || ""
    if(city==""){
        res.status(500).send("error query");
        return;
    }
    controller.getIRperCityRegion7(city)
    .then(data=>{
        res.send(data);
    })
    .catch(next)
});


router.get("/download_covidstatus_region7", (req, res, next) => {            
    let city = req.query.city || ""

    if(city==""){
        res.status(500).send("error query");
        return;
    }
    
    controller.donwloadCovidStatusRegion7(city)
    .then(data=>{
        res.setHeader('Content-disposition', `attachment; filename=ecq_status_${city.replace(/ /g,"")}.csv`);
        res.set('Content-Type', 'text/csv');
        res.status(200).send(data);
    })
    .catch(next)
});
module.exports = router;