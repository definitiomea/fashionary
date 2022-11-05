const MenuTest = () => {
    const testArray = []
    const menulist = {
        silhouette: "Silhouette & Line",
        pattern: "Pattern",
        fabric: "Fabric",
        category: "Category of Clothes",
        brands: "Brands",
        personal: "Personal Color"
    }
    for(const prop in menulist) {
        testArray.push(<li><a href={`/${prop}`}>{menulist[prop]}</a></li>)
    }
    return testArray;
}

export default MenuTest;