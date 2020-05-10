'use strict';

let mongoose = require('mongoose'),
      Schema = mongoose.Schema;


const brgyNCR = {   
  "region" : String,
  "province" : String,
  "muncity" : String,
  "barangay" : String,
  "population" : String,
  "suspect" : Number,
  "probable" : Number,
  "confirmed" : Number,
  "total" : Number, 
  "geometry":{ type : Schema.Types.Mixed, index : '2dsphere' },
  "status":Number,
  "ir":Number
};

const brgyNCRSchema = new Schema(brgyNCR,{ collection: 'brgyNCR' });
mongoose.model('brgyNCR', brgyNCRSchema);

const brgyDavao = {   
  "region" : String,
  "province" : String,
  "muncity" : String,
  "barangay" : String,
  "population" : String,
  "suspect" : Number,
  "probable" : Number,
  "confirmed" : Number,
  "total" : Number, 
  "geometry":{ type : Schema.Types.Mixed, index : '2dsphere' },
  "status":Number,
  "ir":Number
};

const brgyDavaoSchema = new Schema(brgyDavao,{ collection: 'brgyDavao' });
mongoose.model('brgyDavao', brgyDavaoSchema);

const brgyCaraga = {   
  "region" : String,
  "province" : String,
  "muncity" : String,
  "barangay" : String,
  "population" : String,
  "suspect" : Number,
  "probable" : Number,
  "confirmed" : Number,
  "total" : Number, 
  "geometry":{ type : Schema.Types.Mixed, index : '2dsphere' },
  "status":Number,
  "ir":Number
};

const brgyCaragaSchema = new Schema(brgyCaraga,{ collection: 'brgyCaraga' });
mongoose.model('brgyCaraga', brgyCaragaSchema);

const brgyRegion3 = {   
  "region" : String,
  "province" : String,
  "muncity" : String,
  "barangay" : String,
  "population" : String,
  "suspect" : Number,
  "probable" : Number,
  "confirmed" : Number,
  "total" : Number, 
  "geometry":{ type : Schema.Types.Mixed, index : '2dsphere' },
  "status":Number,
  "ir":Number
};

const brgyRegion3Schema = new Schema(brgyRegion3,{ collection: 'brgyRegion3' });
mongoose.model('brgyRegion3', brgyRegion3Schema);


const brgyRegion4A = {   
  "region" : String,
  "province" : String,
  "muncity" : String,
  "barangay" : String,
  "population" : String,
  "suspect" : Number,
  "probable" : Number,
  "confirmed" : Number,
  "total" : Number, 
  "geometry":{ type : Schema.Types.Mixed, index : '2dsphere' },
  "status":Number,
  "ir":Number
};

const brgyRegion4ASchema = new Schema(brgyRegion4A,{ collection: 'brgyRegion4A' });
mongoose.model('brgyRegion4A', brgyRegion4ASchema);

const brgyRegion7 = {   
  "region" : String,
  "province" : String,
  "muncity" : String,
  "barangay" : String,
  "population" : String,
  "suspect" : Number,
  "probable" : Number,
  "confirmed" : Number,
  "total" : Number, 
  "geometry":{ type : Schema.Types.Mixed, index : '2dsphere' },
  "status":Number,
  "ir":Number
};

const brgyRegion7Schema = new Schema(brgyRegion7,{ collection: 'brgyRegion7' });
mongoose.model('brgyRegion7', brgyRegion7Schema);