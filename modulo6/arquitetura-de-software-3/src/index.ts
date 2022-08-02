import {app} from "./controller/app"
import { movieRouter } from "./controller/routes/MovieRouter"
import {userRouter} from "./controller/routes/UserRouter"

app.use("/user", userRouter)
app.use("/movie", movieRouter)