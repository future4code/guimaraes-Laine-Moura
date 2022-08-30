import { app } from "./controller/app"
import { recipeRouter } from "./controller/routes/recipeRouter"
import { userRouter } from "./controller/routes/userRouter"

app.use('/', userRouter)
app.use('/', recipeRouter)