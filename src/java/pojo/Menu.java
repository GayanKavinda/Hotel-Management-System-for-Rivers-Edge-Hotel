package pojo;

public class Menu  implements java.io.Serializable {

     private Integer menuId;
     private String foodName;
     private double price;
     private int foodId;
     private String menuType;
     private String portionSize;

    public Menu() {
    }

    public Menu(String foodName, double price, int foodId, String menuType, String portionSize) {
       this.foodName = foodName;
       this.price = price;
       this.foodId = foodId;
       this.menuType = menuType;
       this.portionSize = portionSize;
    }
   
    public Integer getMenuId() {
        return this.menuId;
    }
    
    public void setMenuId(Integer menuId) {
        this.menuId = menuId;
    }
    public String getFoodName() {
        return this.foodName;
    }
    
    public void setFoodName(String foodName) {
        this.foodName = foodName;
    }
    public double getPrice() {
        return this.price;
    }
    
    public void setPrice(double price) {
        this.price = price;
    }
    public int getFoodId() {
        return this.foodId;
    }
    
    public void setFoodId(int foodId) {
        this.foodId = foodId;
    }
    public String getMenuType() {
        return this.menuType;
    }
    
    public void setMenuType(String menuType) {
        this.menuType = menuType;
    }
    public String getPortionSize() {
        return this.portionSize;
    }
    
    public void setPortionSize(String portionSize) {
        this.portionSize = portionSize;
    }




}


