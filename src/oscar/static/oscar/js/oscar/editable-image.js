/**
Image editable input.
Internally value stored as {}

@class image
@extends abstractinput
@final
@example
<a href="#" id="image" data-type="image" data-pk="1"></a>
<script>
$(function(){
    $('#image').editable({
        url: '/post',
        title: 'Enter title #',
        value: {
        }
    });
});
</script>
**/
(function ($) {
    "use strict";
    
    var Image = function (options) {
        this.init('image', options, Image.defaults);
    };

    //inherit from Abstract input
    $.fn.editableutils.inherit(Image, $.fn.editabletypes.abstractinput);

    $.extend(Image.prototype, {
        /**
        @method render() 
        **/        
        render: function() {
           
        },
        
        /**
        Default method to show value in element. Can be overwritten by display option.
        
        @method value2html(value, element) 
        **/
        value2html: function(value, element) {
            if(!value) {
                $(element).empty();
                return; 
            }
            var html = '';
            $(element).html(html); 
        },
        
        /**
        Gets value from element's html
        
        @method html2value(html) 
        **/        
        html2value: function(html) {        
          
          return null;  
        },
      
       /**
        Converts value to string. 
        It is used in internal comparing (not for sending to server).
        
        @method value2str(value)  
       **/
       value2str: function(value) {
           var str = '';
           if(value) {
               for(var k in value) {
                   str = str + k + ':' + value[k] + ';';  
               }
           }
           return str;
       }, 
       
       /*
        Converts string to value. Used for reading value from 'data-value' attribute.
        
        @method str2value(str)  
       */
       str2value: function(str) {
           /*
           this is mainly for parsing value defined in data-value attribute. 
           If you will always set value by javascript, no need to overwrite it
           */
           return str;
       },                
       
       /**
        Sets value of input.
        
        @method value2input(value) 
        @param {mixed} value
       **/         
       value2input: function(value) {
           if(!value) {
             return;
           }
       },       
       
       /**
        Returns value of input.
        
        @method input2value() 
       **/          
       input2value: function() { 
           return {
             
           };
       },        
       
        /**
        Activates input: sets focus on the first field.
        
        @method activate() 
       **/        
       activate: function() {
            
       },  
       
       /**
        Attaches handler to submit form in case of 'showbuttons=false' mode
        
        @method autosubmit() 
       **/       
       autosubmit: function() {
           this.$input.keydown(function (e) {
                if (e.which === 13) {
                }
           });
       }       
    });

    Image.defaults = $.extend({}, $.fn.editabletypes.abstractinput.defaults, {
        tpl: '<div class="editable-image"></div>',
        inputclass: ''
    });

    $.fn.editabletypes.image = Image;

}(window.jQuery));