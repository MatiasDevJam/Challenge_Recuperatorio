module.exports = (sequelize, DataTypes) => {

    //agrego alias
    let alias = 'Comentario';

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
       texto_comentario: {
           type: DataTypes.STRING,
           allowNull: false
       },
       calificacion: {
           type: DataTypes.INTEGER,
           allowNull: false
       },
       producto_id: {
           type: DataTypes.INTEGER,
           allowNull: false
       },
       usuario_id: {
           type: DataTypes.INTEGER,
           allowNull: false
       }
    };

    let config = {
        tableName: "comentarios"
    };

    const Comentario = sequelize.define(alias, cols, config);

    Comentario.associate = function (models) {
        Comentario.belongsTo(models.Producto, {
            foreignKey: 'producto_id',
            as: 'producto'
        })
        
        Comentario.belongsTo(models.Usuario, { 
            foreignKey: 'usuario_id',
            as: 'usuario'
        })
    }


    return Comentario;

}