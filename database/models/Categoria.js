module.exports = (sequelize, DataTypes) => {

    //agrego alias
    let alias = 'Categoria';

    //agrego datos de la tabla
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    };

    //agrego timeStamps
    let config = {
        tableName: "categorias",
        timestamps : false,
    };

    const Categoria = sequelize.define(alias, cols, config);

  

    return Categoria;

}