exports.proyectoIndex = (req, res) => {
    res.render('index');
};

exports.proyectoProductos = (req, res) => {
    const productos = [
        {
            name: 'tomate',
        },
        {
            name: 'zapallo',
        },
        {
            name: 'arveja',
        }   
    ];
    res.render('productos', {
        productos,
    });
};