module.exports = (sequelize,DataTypes) => (
    sequelize.define('data',{
        name: {
            type : DataTypes.STRING(20),
            allowNull : false,
            unique : true,
        },
        en: {
            type : DataTypes.STRING(40),
            allowNull : true,
        },
        zh: {
            type : DataTypes.STRING(40),
            allowNull : true,
        },
        za: {
            type : DataTypes.STRING(40),
            allowNull : true,
        },
        img: {
            type : DataTypes.STRING(40),
            allowNull : true,
        },
        info: {
            type : DataTypes.STRING(40),
            allowNull : true,
        },
    },{
        timestamps: false,
    })
);