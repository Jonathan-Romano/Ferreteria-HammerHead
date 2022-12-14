module.exports = (sequelize, dataTypes) =>{
    const alias = "Categories";
    const cols = {
        id :{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: dataTypes.STRING(100),
            allowNull: false
        }
    }

    const config = {
        timestamps : false
    };

    const Categoria = sequelize.define(alias, cols, config);

    Categoria.associate = (models)=>{
        Categoria.hasMany(models.Products,{
            as: "productos",
            foreignKey: "categoria_id"
          });

    };


    return Categoria;
}