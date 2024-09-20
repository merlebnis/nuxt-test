<script setup>
    import Text from './src/components/modules/Text.vue'
    import BaseLink from './src/components/base/BaseLink.vue';
    import BaseHeadline from './src/components/base/BaseHeadline.vue';
    import BaseDiv from './src/components/base/BaseDiv.vue';
    import "./src/assets/scss/main.css"


    onMounted(() => {
        
        let iframe = document.querySelector('iframe')

        if(iframe){
            iframe.addEventListener('load', () => {
                let iframeDocument = iframe.contentDocument;
                let alleDivs = iframeDocument.getElementsByClassName("myDiv");
                let element = alleDivs.item(0);
                let alleBodys = iframeDocument.getElementsByTagName("body");
                let body = alleBodys.item(0); 

                element.classList.remove("dark-mode");
                element.classList.add("light-mode");
                body.classList.remove("dark-mode");
                body.classList.add("light-mode");
                console.log("modus aktiviert");
            })
        }

    });

    const colorMode = useColorMode();
    const darkMode = ref(false);
    watch (darkMode, (newDarkMode) => {
        let iframeDocument = document.querySelector('iframe').contentDocument;
        let alleDivs = iframeDocument.getElementsByClassName("myDiv");
        let element = alleDivs.item(0);
        let alleBodys = iframeDocument.getElementsByTagName("body");
        let body = alleBodys.item(0); 

        if(newDarkMode){
            element.classList.remove("light-mode");
            element.classList.add("dark-mode");
            body.classList.remove("light-mode");
            body.classList.add("dark-mode");
        }else{
            element.classList.remove("dark-mode");
            element.classList.add("light-mode");
            body.classList.remove("dark-mode");
            body.classList.add("light-mode");
        }

        console.log("switched mode");
    })

</script>

<template>
    <Story title="Textmodules">
        <template #controls>
            DarkMode: <input type="checkbox" v-model="darkMode"/>
        </template>

        <Variant title="basic styling">
            <BaseDiv class="myDiv">
                <BaseHeadline
                    :level="1"
                >Titel</BaseHeadline>
                <Text 
                    headline="Intro" 
                    copy="Hier steht Text"
                />
                <BaseLink
                    type="btn"
                    url="#"
                    color="green"
                    @click="click()"
                >klick mich!
                </BaseLink>

            </BaseDiv>
        </Variant>

        <Variant title="darkgreen full width">
            <BaseDiv type="fullwidth--darkgreen" class="myDiv">
                <Text
                    headline="Lorem Ipsum"
                    copy="und so weiter"
                ></Text>
            </BaseDiv>
        </Variant>

        <Variant title="beige full width">
            <BaseDiv type="fullwidth--beige" class="myDiv">
                <Text
                    headline="Lorem Ipsum"
                    copy="und so weiter"
                ></Text>
                <BaseLink
                    type="btn"
                    url="#"
                    color="frog"
                    @click="click()"
                >klick mich!
                </BaseLink>
            </BaseDiv>
        </Variant>

        <Variant title="small contrast block">
            <BaseDiv type="block" class="myDiv">
                <Text
                    headline="Dolot sit"
                    copy="und so weiter"
                ></Text>
            </BaseDiv>
            <br/>
        </Variant>

    </Story>
</template>

<docs lang="md">
# Text Blocks
The text components are styled through the use od BaseDiv Elements.
Always surround them with the BaseDiv Element if you want it to be centered, use the type modificator for the BaseDiv for different kinds of text blocks.

These are the available types:
-leave it empty for the inner elements to be centered on the page
-fullwidth--darkgreen
-fullwidth--beige
-block
</docs>