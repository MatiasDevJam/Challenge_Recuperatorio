module.exports = (sequelize, DataTypes) => {

    //agrego alias
    let alias = 'Usuario';

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
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