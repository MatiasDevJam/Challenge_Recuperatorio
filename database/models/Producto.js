module.exports = (sequelize, DataTypes) => {

    //agrego alias
    let alias = 'Producto';

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
        marca: {
            type: DataTypes.STRING,
            allowNull: false
        },
        precio: {
            type: DataTypes.STRING,
            allowNull: false
        },
        img_url: {
            type: DataTypes.STRING,
            allowNull: false,
            allowNull: false
        },
        categoria_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        usuario_id: {
            type: DataTypes.INTEGER,
        }
    };

    let config = {
        tableName: "products"
    };

    const Producto = sequelize.define(alias, cols, config);

 
    Producto.associate = function (models) {
        Producto.belongsTo(models.Categoria, {
            as: 'categorias',
            foreignKey: 'categoria_id'
        })

        Producto.belongsTo(models.Usuario, {
            as: 'usuario',
            foreignKey: 'usuario_id'
        })
        
        Producto.hasMany(models.Comentario, {
            foreignKey: 'producto_id',
            as: 'comentarios'
        })  
    }



    return Producto;

}