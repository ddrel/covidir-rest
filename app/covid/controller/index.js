const mongoose =  require('mongoose');
const _ = require("lodash");
const turf  = require("@turf/turf");
const allSettled = require('promise.allsettled');
const { Parser } = require('json2csv');
const RegexEscape = require("regex-escape");
const getCentroid = (geo)=>{
    let polygon = turf.polygon([geo.coordinates[0][0]]);
    let coord = turf.centroid(polygon).geometry.coordinates;
    return {longitude:coord[0],latitude:coord[1]};             
}


const _transformGeoData=(geo)=>{
    let _p = {};
    _p["region"] = geo.region
    _p["province"] = geo.province
    _p["muncity"] =  geo.muncity
    _p["barangay"] = geo.barangay
    _p["population"] = geo.population
    _p["suspect"]  = geo.suspect
    _p["probable"] = geo.probable
    _p["confirmed"] = geo.confirmed
    _p["total"]  =   geo.total
    _p["status"] =   geo.status
    _p["ir"] = geo.ir
  return {type:"Feature",
          properties: _p,
          geometry:geo.geometry
  }
}
async function getbrgyNCR(){    
    let data  = await mongoose.model("brgyNCR").find({ "geometry": { $exists: true } });
    return  data.map(_transformGeoData)
}
async function getbrgyDavao(){    
    let data  = await mongoose.model("brgyDavao").find({ "geometry": { $exists: true } });
    return  data.map(_transformGeoData)
}
async function getbrgyCaraga(){    
    let data  = await mongoose.model("brgyCaraga").find({ "geometry": { $exists: true } });
    return  data.map(_transformGeoData)
}

async function getbrgyRegion3(){    
    let data  = await mongoose.model("brgyRegion3").find({ "geometry": { $exists: true } });
    return  data.map(_transformGeoData)
}

async function getbrgyRegion4A(){    
    let data  = await mongoose.model("brgyRegion4A").find({ "geometry": { $exists: true } });
    return  data.map(_transformGeoData)
}

async function getbrgyRegion7(){    
    let data  = await mongoose.model("brgyRegion7").find({ "geometry": { $exists: true } });
    return  data.map(_transformGeoData)
}



async function getIRperCityNCR(qry){
    return await mongoose.model("brgyNCR").find({ "muncity": new RegExp(qry,'i')}).select({geometry:0,_id:0});
}

async function getIRperCityDavao(qry){
    return await mongoose.model("brgyDavao").find({ "muncity": new RegExp(qry,'i')}).select({geometry:0,_id:0});
}

async function getIRperCityCaraga(qry){
    return await mongoose.model("brgyCaraga").find({ "muncity": new RegExp(qry,'i')}).select({geometry:0,_id:0});
}

async function getIRperCityRegion3(qry){
    return await mongoose.model("brgyRegion3").find({ "muncity": new RegExp(qry,'i')}).select({geometry:0,_id:0});
}
async function getIRperCityRegion4A(qry){
    return await mongoose.model("brgyRegion4A").find({ "muncity": new RegExp(qry,'i')}).select({geometry:0,_id:0});
}

async function getIRperCityRegion7(qry){
    return await mongoose.model("brgyRegion7").find({ "muncity": new RegExp(qry,'i')}).select({geometry:0,_id:0});
}

async function donwloadCovidStatusNCR(qry){
    let result = await getIRperCityNCR(qry)
    let data  = result.map(d=>{
        return {barangay:d.barangay,
                population:d.population,
                suspect:d.suspect,
                probable:d.probable,
                confirmed:d.confirmed,
                total:d.total,
                ir: d.ir? d.ir.toFixed(2):0}
        })
    
        //console.log(data);
    const json2csvParser = new Parser();
    return json2csvParser.parse(data);
}  
async function donwloadCovidStatusDavao(qry){
    let result = await getIRperCityDavao(qry)
    let data  = result.map(d=>{
        return {barangay:d.barangay,
                population:d.population,
                suspect:d.suspect,
                probable:d.probable,
                confirmed:d.confirmed,
                total:d.total,
                ir: d.ir? d.ir.toFixed(2):0}
        })
    
        //console.log(data);
    const json2csvParser = new Parser();
    return json2csvParser.parse(data);
}    

async function donwloadCovidStatusCaraga(qry){
    let result = await getIRperCityCaraga(qry)
    let data  = result.map(d=>{
        return {barangay:d.barangay,
                population:d.population,
                suspect:d.suspect,
                probable:d.probable,
                confirmed:d.confirmed,
                total:d.total,
                ir: d.ir? d.ir.toFixed(2):0}
        })
    
        //console.log(data);
    const json2csvParser = new Parser();
    return json2csvParser.parse(data);
}

async function donwloadCovidStatusRegion3(qry){
    let result = await getIRperCityRegion3(qry)
    let data  = result.map(d=>{
        return {barangay:d.barangay,
                population:d.population,
                suspect:d.suspect,
                probable:d.probable,
                confirmed:d.confirmed,
                total:d.total,
                ir: d.ir? d.ir.toFixed(2):0}
        })
    
        //console.log(data);
    const json2csvParser = new Parser();
    return json2csvParser.parse(data);
}
async function donwloadCovidStatusRegion4A(qry){
    let result = await getIRperCityRegion4A(qry)
    let data  = result.map(d=>{
        return {barangay:d.barangay,
                population:d.population,
                suspect:d.suspect,
                probable:d.probable,
                confirmed:d.confirmed,
                total:d.total,
                ir: d.ir? d.ir.toFixed(2):0}
        })
    
        //console.log(data);
    const json2csvParser = new Parser();
    return json2csvParser.parse(data);
}

async function donwloadCovidStatusRegion7(qry){
    let result = await getIRperCityRegion7(qry)
    let data  = result.map(d=>{
        return {barangay:d.barangay,
                population:d.population,
                suspect:d.suspect,
                probable:d.probable,
                confirmed:d.confirmed,
                total:d.total,
                ir: d.ir? d.ir.toFixed(2):0}
        })
    
        //console.log(data);
    const json2csvParser = new Parser();
    return json2csvParser.parse(data);
}



module.exports = {getbrgyNCR,
                  getIRperCityNCR,
                  donwloadCovidStatusNCR,
                  getbrgyDavao,
                  getIRperCityDavao,
                  donwloadCovidStatusDavao,
                  getbrgyCaraga,
                  getIRperCityCaraga,
                  donwloadCovidStatusCaraga,
                  getbrgyRegion3,
                  getIRperCityRegion3,
                  donwloadCovidStatusRegion3,
                  getbrgyRegion4A,
                  getIRperCityRegion4A,
                  donwloadCovidStatusRegion4A,
                  getbrgyRegion7,
                  getIRperCityRegion7,
                  donwloadCovidStatusRegion7
                }