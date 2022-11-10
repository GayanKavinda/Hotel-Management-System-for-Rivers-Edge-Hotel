package pojo;

public class ItemFood  implements java.io.Serializable {

     private Integer fooditemId;
     private int itemId;
     private int foodId;
     private int quantity;

    public ItemFood() {
    }

    public ItemFood(int itemId, int foodId, int quantity) {
       this.itemId = itemId;
       this.foodId = foodId;
       this.quantity = quantity;
    }
   
    public Integer getFooditemId() {
        return this.fooditemId;
    }
    
    public void setFooditemId(Integer fooditemId) {
        this.fooditemId = fooditemId;
    }
    public int getItemId() {
        return this.itemId;
    }
    
    public void setItemId(int itemId) {
        this.itemId = itemId;
    }
    public int getFoodId() {
        return this.foodId;
    }
    
    public void setFoodId(int foodId) {
        this.foodId = foodId;
    }
    public int getQuantity() {
        return this.quantity;
    }
    
    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }




}


