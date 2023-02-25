import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import createIdeaRoutes from './routes/idea.routes/create.routes';
import updateIdeaRoutes from './routes/idea.routes/update.routes';
import deleteIdeaRoutes from './routes/idea.routes/delete.routes';
import listIdeaRoutes from './routes/idea.routes/list.routes';

import createCategoryRoutes from './routes/category.routes/create.routes';
import listCategoriesRoutes from './routes/category.routes/list.routes';
import removeCategoryRoutes from './routes/category.routes/remove.routes';
import updateCategoryRoutes from './routes/category.routes/update.routes';
import getCategoryRoutes from './routes/category.routes/get.routes';

const CURRENT_WORKING_DIR = process.cwd();
const app = express();


// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
// secure apps by setting various HTTP headers
app.use(helmet());
// enable CORS - Cross Origin Resource Sharing
app.use(cors());

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')));

app.use('/', createIdeaRoutes);
app.use('/', updateIdeaRoutes);
app.use('/', deleteIdeaRoutes);
app.use('/', listIdeaRoutes);

app.use('/', createCategoryRoutes);
app.use('/', listCategoriesRoutes);
app.use('/', removeCategoryRoutes);
app.use('/', updateCategoryRoutes);
app.use('/', getCategoryRoutes);

// Catch unauthorised errors
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({"error" : err.name + ": " + err.message});
  }else if (err) {
    res.status(400).json({"error" : err.name + ": " + err.message});
    console.log(err)
  }
})

export default app