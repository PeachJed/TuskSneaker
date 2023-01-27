package app

import "github.com/gin-gonic/gin"

var (
	router = gin.Default()
)

func StartApplication() {
	mapUrls()           /// func mapUrls()  in router.go
	router.Run(":8081") ///runon port 8081
}
