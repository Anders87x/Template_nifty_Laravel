<template>
       <div id="page-content">


					<!--STATIC EXAMPLE-->
					<!--===================================================-->

					<div class="panel panel-trans">
					    <div class="panel-body demo-nifty-modal">

					        <!--Static Examplel-->
					        <div class="modal">
					            <div class="modal-dialog">
					                <div class="modal-content">
					                    <div class="modal-header">
					                        <button type="button" class="close" data-dismiss="modal"><i class="pci-cross pci-circle"></i></button>
					                        <h4 class="modal-title">Modal title</h4>
					                    </div>

					                    <div class="modal-body">
					                        <p>One fine body ...........</p>
					                    </div>

					                    <div class="modal-footer">
					                        <button class="btn btn-default" data-dismiss="modal" type="button">Close</button>
					                        <button class="btn btn-primary" type="button">Save changes</button>
					                    </div>
					                </div>
					            </div>
					        </div>

					    </div>
					</div>

					<!--===================================================-->
					<!--END OF STATIC EXAMPLE-->

					<div class="row">
					    <div class="col-md-6">
					        <div id="demo-panel-ref" class="panel">
					            <div class="panel-heading">
					                <h3 class="panel-title">Default modal</h3>
					            </div>
					            <div class="panel-body">

					                <!--Launch demo default modal-->
					                <p>Toggle a modal via JavaScript by clicking the button below. It will slide down and fade in from the top of the page.</p><br>
					                <button data-target="#demo-default-modal" data-toggle="modal" class="btn btn-primary btn-lg">Launch demo modal</button>

					            </div>
					        </div>
					    </div>
					    <div class="col-md-6">
					        <div class="panel">
					            <div class="panel-heading">
					                <h3 class="panel-title">Remove animation</h3>
					            </div>
					            <div class="panel-body">

					                <!--Launch demo modal wihtout animation-->
					                <p>For modals that simply appear rather than fade in to view, remove the <code>.fade</code> class from your modal markup.</p><br>
					                <button data-target="#demo-modal-wo-anim" data-toggle="modal" class="btn btn-primary btn-lg">Launch demo modal</button>

					            </div>
					        </div>
					    </div>
					</div>
					<div class="row">
					    <div class="col-sm-6">
					        <div class="panel">
					            <div class="panel-heading">
					                <h3 class="panel-title">Optional sizes</h3>
					            </div>
					            <div class="panel-body">

					                <!--Large modal button-->
					                <p>Modals have two optional sizes, available via modifier classes to be placed on a <code>.modal-dialog</code></p><br>
					                <button data-target="#demo-lg-modal" data-toggle="modal" class="btn btn-warning">Large modal</button>

					            </div>
					        </div>
					    </div>
					    <div class="col-sm-6">
					        <div class="panel">
					            <div class="panel-heading">
					                <h3 class="panel-title">Optional sizes</h3>
					            </div>
					            <div class="panel-body">

					                <!--Small modal button-->
					                <p>Modals have two optional sizes, available via modifier classes to be placed on a <code>.modal-dialog</code></p><br>
					                <button data-target="#demo-sm-modal" data-toggle="modal" class="btn btn-success">Small modal</button>

					            </div>
					        </div>
					    </div>
					</div>
					<hr class="new-section-sm">
					<div class="row">
					    <div class="eq-height">
					    <div class="col-lg-4 eq-box-lg">
					        <div class="panel">
					            <div class="panel-heading">
					                <h3 class="panel-title">Bootbox Modals</h3>
					            </div>
					            <div class="panel-body demo-nifty-btn">

					                <!--Bootbox Modals-->
					                <button id="demo-bootbox-alert" class="btn btn-danger">Alert</button>
					                <button id="demo-bootbox-confirm" class="btn btn-info">Confirm</button>
					                <button id="demo-bootbox-prompt" class="btn btn-warning">Prompt</button>

					            </div>
					        </div>
					    </div>
					    <div class="col-lg-4 eq-box-lg">
					        <div class="panel">
					            <div class="panel-heading">
					                <h3 class="panel-title">Bootbox Custom Modals</h3>
					            </div>
					            <div class="panel-body demo-nifty-btn">

					                <!--Bootbox Custom Modals-->
					                <button id="demo-bootbox-custom" class="btn btn-purple">Custom Dialog</button>
					                <button id="demo-bootbox-custom-h-content" class="btn btn-pink">HTML Content</button>
					                <button id="demo-bootbox-custom-h-form" class="btn btn-success">HTML Form</button>

					            </div>
					        </div>
					    </div>
					    <div class="col-lg-4 eq-box-lg">
					        <div class="panel">
					            <div class="panel-heading">
					                <h3 class="panel-title">Bootbox with animate.css</h3>
					            </div>
					            <div class="panel-body demo-nifty-btn">

					                <!--Bootbox with Animate.css-->
					                <button id="demo-bootbox-zoom" class="btn btn-info">Zoom in/out</button>
					                <button id="demo-bootbox-bounce" class="btn btn-warning">Bounce</button>
					                <button id="demo-bootbox-ruberwobble" class="btn btn-dark">RubberBand and wobble</button>
					                <button id="demo-bootbox-flip" class="btn btn-purple">Flip</button>
					                <button id="demo-bootbox-lightspeed" class="btn btn-success">Light Speed</button>
					                <button id="demo-bootbox-swing" class="btn btn-primary">Swing and Hinge</button>

					            </div>
					        </div>
					    </div>
					    </div>
					</div>


                </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
