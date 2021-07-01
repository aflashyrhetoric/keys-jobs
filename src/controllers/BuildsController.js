import Build from "../model/Build"
export default class BuildsController {
  static async saveNewBuild(req, res) {
    const build = req.body.build
    const addedID = await Build.saveNewBuild(build)

    res.json({
      status: 200,
      data: addedID,
    })
    const sku = req.params.sku
    const updatedID = await Build.saveUpdatesToBuild(sku, build)

    res.json({
      status: 200,
      data: updatedID,
    })
  }

  static async deleteBuild(req, res) {
    const sku = req.params.sku
    const Build = req.body.Build
    const deletedID = await Build.deleteBuild(sku, Build)

    res.json({
      status: 200,
      data: deletedID,
    })
  }
}
