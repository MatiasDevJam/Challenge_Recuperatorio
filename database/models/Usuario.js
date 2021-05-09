module.exports = (sequelize, DataTypes) => {

    //agrego alias
    let alias = 'Usuario';

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        }
    };

    let config = {
        tableName: "usuarios"
    };

    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function (models) {
        Usuario.hasMany(models.Comentario, { 
            foreignKey: 'usuario_id',
            as: 'comentarios'
        })
    }

    return Usuario;

}