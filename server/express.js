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
import sortIdeaRoutes from './routes/idea.routes/sort.routes';

import createCategoryRoutes from './routes/category.routes/create.routes';
import listCategoriesRoutes from './routes/category.routes/list.routes';
import removeCategoryRoutes from './routes/category.routes/remove.routes';
import updateCategoryRoutes from './routes/category.routes/update.routes';
import getCategoryRoutes from './routes/category.routes/get.routes';

import createUserRoutes from './routes/user.routes/create.routes';
import updateUserRoutes from './routes/user.routes/update.routes';
import deleteUserRoutes from './routes/user.routes/delete.routes';
import listUserRoutes from './routes/user.routes/list.routes';
import loginUserRoutes from './routes/user.routes/login.routes';
import idUserRoutes from './routes/user.routes/id.routes';

import createDepartmentRoutes from './routes/department.routes/create.routes';
import updateDepartmentRoutes from './routes/department.routes/update.routes';
import deleteDepartmentRoutes from './routes/department.routes/delete.routes';
import listDepartmentRoutes from './routes/department.routes/list.routes';

import createRoleRoutes from './routes/role.routes/create.routes';
import updateRoleRoutes from './routes/role.routes/update.routes';
import deleteRoleRoutes from './routes/role.routes/delete.routes';
import listRoleRoutes from './routes/role.routes/list.routes';

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
app.use('/', sortIdeaRoutes);

app.use('/', createCategoryRoutes);
app.use('/', listCategoriesRoutes);
app.use('/', removeCategoryRoutes);
app.use('/', updateCategoryRoutes);
app.use('/', getCategoryRoutes);

app.use('/', createUserRoutes);
app.use('/', updateUserRoutes);
app.use('/', loginUserRoutes);
app.use('/', deleteUserRoutes);
app.use('/', listUserRoutes);
app.use('/', idUserRoutes);

app.use('/', createDepartmentRoutes);
app.use('/', updateDepartmentRoutes);
app.use('/', deleteDepartmentRoutes);
app.use('/', listDepartmentRoutes);

app.use('/', createRoleRoutes);
app.use('/', updateRoleRoutes);
app.use('/', deleteRoleRoutes);
app.use('/', listRoleRoutes);


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