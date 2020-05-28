module.exports = (sequelize,DataTypes) => (
    sequelize.define('data',{
        koname: {
            type : DataTypes.STRING(70),
            allowNull : false,
        },
        enname: {
            type : DataTypes.STRING(70),
            allowNull : true,
        },
        en: {
            type : DataTypes.STRING(100),
            allowNull : true,
        },
        img: {
            type : DataTypes.STRING(100),
            allowNull : true,
        },
        info: {
            type : DataTypes.STRING(500),
            allowNull : true,
        },
    },{
        timestamps: false,
    })
);