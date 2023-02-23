import Term from './../../../models/term.model';
import errorHandler from '../../../helpers/dbErrorHandler.js';
import fs from 'fs';
import formidable from 'formidable';

const create = async (req, res) => {    
    let form = new formidable.IncomingForm();
    form.keepExtension = true;
    form.parse(req, async (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "File could not be uploaded"
            })
        }
        if(fields["startDate"] === undefined){
            fields["startDate"] = new Date();
        }
        if(fields["closureDate"] === undefined){
            fields["closureDate"] = new Date();
        }
        if(fields["endDate"] === undefined){
            fields["endDate"] = new Date();
        }
        let term = new Term(fields);
        try {
            let termResult = await term.save();
            res.status(200).json({
                term: termResult,
                message: "Created term successfully"
            });
        } catch (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
              })
        }
    })
}


export default {create}