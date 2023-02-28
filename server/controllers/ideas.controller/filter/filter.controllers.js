import errorHandler from '../../../helpers/dbErrorHandler.js';
import Idea from '../../../models/idea.model';

const filterIdea = async (req, res) => {
    try {
        