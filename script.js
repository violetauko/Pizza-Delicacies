$(function () {
    $('.summary').hide();
    $('.cdata-overlay').hide();

    $("#checkout").click(function () {
        var flavour = $(".flavour option:selected").val();
        var size = $("#size option:selected").val();
        var crust = $("#crust option:selected").val();
        var topping = $("#toppings option:selected").val();
        var number = $("#number").val();
        console.log(size);

        let order = (f, s, c, t, n, total) => {
            return {f, s, c, t, n, total};
        };

        let price, totalPrice;
        switch (flavour) {
            case flavour = "veggie":
                switch (size) {
                    case size = "small":
                        price = 300;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 200 
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 140 
                        } else {
                            totalPrice = (price * number) + 170 
                        } 
                        break;
                    case size = "medium":
                        price = 600;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 200 
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 140 
                        } else {
                            totalPrice = (price * number) + 170 
                        
                        }
                        break;
                    case size = "large":
                        price = 0;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 200 
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 140 
                        } else {
                            totalPrice = (price * number) + 170 
                        }
                        case size = "extra-large":
                            price = 1500;
                            if (crust === "crispy") {
                                totalPrice = (price * number) + 200 
                            } else if (crust === "stuffed") {
                                totalPrice = (price * number) + 140 
                            } else {
                                totalPrice = (price * number) + 170 
                            }
                        break;
                }
                break;
                case flavour = "meat":
                switch (size) {
                    case size = "small":
                        price = 300;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 200 
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 140 
                        } else {
                            totalPrice = (price * number) + 170 
                        } 
                        break;
                          case size = "medium":
                             price = 600;
                                if (crust === "crispy") {
                                   totalPrice = (price * number) + 200 
                                } else if (crust === "stuffed") {
                                       totalPrice = (price * number) + 140 
                                 } else {
                                      totalPrice = (price * number) + 170 
                                 } 
                        break;
                                case size = "large":
                                    price = 0;
                                    if (crust === "crispy") {
                                        totalPrice = (price * number) + 200 
                                    } else if (crust === "stuffed") {
                                        totalPrice = (price * number) + 140 
                                    } else {
                                        totalPrice = (price * number) + 170 
                                    } 
                               break;
                               case size = "extra-large":
                                price = 1500;
                                if (crust === "crispy") {
                                    totalPrice = (price * number) + 200 
                                } else if (crust === "stuffed") {
                                    totalPrice = (price * number) + 140 
                                } else {
                                    totalPrice = (price * number) + 170 
                                } 
                }
                break;
            case flavour = "cheese":
                switch (size) {
                    case size = "small":
                        price = 300;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 200 
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 140 
                        } else {
                            totalPrice = (price * number) + 170 
                        }
                        break;
                        case size = "medium":
                            price = 600;
                            if (crust === "crispy") {
                                totalPrice = (price * number) + 200 
                            } else if (crust === "stuffed") {
                                totalPrice = (price * number) + 140 
                            } else {
                                totalPrice = (price * number) + 170 
                            }
                        break;
                        case size = "large":
                            price = 0;
                            if (crust === "crispy") {
                                totalPrice = (price * number) + 200 
                            } else if (crust === "stuffed") {
                                totalPrice = (price * number) + 140 
                            } else {
                                totalPrice = (price * number) + 170 
                            }
                        break;
                    case size = "etra-large":
                        price = 1500;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 200 
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 140 
                        } else {
                            totalPrice = (price * number) + 170 
                        }
                }
                break;
            case flavour = "pepperoni":
                switch (size) {
                    case size = "small":
                                price = 300;
                                if (crust === "crispy") {
                                    totalPrice = (price * number) + 200 
                                } else if (crust === "stuffed") {
                                    totalPrice = (price * number) + 140 
                                } else {
                                    totalPrice = (price * number) + 170 
                                }
                        break;
                    case size = "medium":
                        price = 600;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 200 
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 140 
                        } else {
                            totalPrice = (price * number) + 170 
                        }
                        break;
                    case size = "large":
                        price = 0;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 200 
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 140 
                        } else {
                            totalPrice = (price * number) + 170 
                        }
                        break;
                        case size = "extra-large":
                        price = 1500;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 200 
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 140 
                        } else {
                            totalPrice = (price * number) + 170 
                        }
                }
                break;

            }
            switch (topping) {
                case topping = "brocoli":
                    totalPrice = totalPrice + 50;
                    break;
                case topping = "pepperoni":
                    totalPrice = totalPrice + 50;
                    break;
                case topping = "beef":
                    totalPrice = totalPrice + 50;
                    break;
                case topping = "extra-cheese":
                    totalPrice = totalPrice + 50;
                    break;
                case topping = "mashroom":
                    totalPrice = totalPrice + 50;
                    break;
                case topping = "becon":
                    totalPrice = totalPrice + 50;
                    break;
                
            }
        
        let newOrder = order(flavour, size, crust, topping, number, totalPrice);
        console.log(newOrder); 

        
        $('.summary').slideDown(2000);
        $('.cdata-overlay').slideUp();
        $('#list').slideDown();
        $('.deliver').show(1000);
        $('.delivernot').show(1000);
        $('#place').hide();


        $('#list').text(" ");
        $("#list").append("<br>" + "Flavour :   " 
            + newOrder.f + "<br>" + "Size :   "
            + newOrder.s + "<br>" + "Crust :     "
            + newOrder.c + "<br>" + "Toppings :     "
            + newOrder.t + "<br>" + " Number of pizzas :    "
            + newOrder.n + "<br>" + "Total Price :  "
            + newOrder.total + "<br><br>").css('font-family', 'system-ui').css('font-size', '24px');
            

    });

    //Deliver
    $(".deliver").click(function () {
        $('.summary').slideUp();
        $('#list').slideUp();
        $('.summary').text("Provide location details").slideDown();
        $('.deliver').hide(1000);
        $('.delivernot').hide(1000);
        $('.cdata-overlay').slideDown();

        
    })


    // Pick Up
    $(".delivernot").click(function () {

    });

    Scrollify
    $(function () {
        $.scrollify.move('#sum-order');
    });
});

function placeOrder(event){
    var name =document.getElementById('name').value;
    var phone =document.getElementById('phone').value;
    var location =document.getElementById('location').value;

    if(name==""||name==null){
        alert('please input  your name!')
    }
    else if(phone==""||phone==null){
        alert('please input phone number!')
    }
    else if(location==""||location==null){
        alert('please input location of delivery!')
    }
    else{
        alert(name +" your order has been received.Your order will be ready in 15mins.")
    }
    event.preventDefault()

}


