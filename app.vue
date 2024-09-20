<script setup>
  import Text from './src/components/modules/Text.vue'
  import Image from './src/components/modules/Image.vue'
  import BaseLink from './src/components/base/BaseLink.vue';
  import BaseHeadline from './src/components/base/BaseHeadline.vue';
  import BaseDiv from './src/components/base/BaseDiv.vue';
  import "./src/assets/scss/main.css"
import { useHead } from 'nuxt/app';

  const { locale, setLocale } = useI18n();

  useHead({
    title: "The greenest website",
    meta: [{name:"description", content:"the greenest website ever is a small test website built to practize and showcase the skills of a new junior dev"}]
  });

  const colorMode = useColorMode();
  const darkMode = ref(false);
  watch (darkMode, (newDarkMode) => {
    if(newDarkMode){
      colorMode.preference = "dark";
      console.log("Dark Mode activated");
    }else {
      colorMode.preference = "light";
      console.log("Light Mode activated");
    }
  })

  const clicked = ref(false);
  function click(){
    console.log("klick");
    clicked.value = true;
  }

</script>

<template>
    <Image 
      name="2880x1620_mountains_3@2.jpeg"
      alt="mountain landscape"
    />
    <label for="darkMode">{{ $t('darkMode') }}</label>
    <input id="darkMode" type="checkbox" v-model="darkMode">
    <BaseLink
      type="link"
      url="/en/"
    >en</BaseLink>
    <BaseLink
      type="link"
      url="/de/"
    >de</BaseLink>

    <BaseDiv>
      <BaseHeadline
        :level="1"
      >{{ $t('websiteTitle') }}</BaseHeadline>
      <Text 
        :headline="$t('welcome')" 
        :copy="$t('intro')"
      />
      <BaseLink
        type="btn"
        url="#"
        color="green"
        @click="click()"
      >{{ $t('click') }}
      </BaseLink>

      <Text v-if="clicked"
        :copy="$t('thx')"
      />
    </BaseDiv>

    <BaseDiv type="fullwidth--darkgreen">
      <Text
        headline="Lorem Ipsum"
        :copy="$t('etc')"
      ></Text>
      <BaseLink
        type="btn"
        url="#"
        color="frog"
        @click="click()"
      >{{ $t('click') }}
      </BaseLink>
    </BaseDiv>

    <BaseDiv type="block">
      <Text
        headline="Dolot sit"
        :copy="$t('etc')"
      ></Text>
    </BaseDiv>

    <br/>
    <Image 
      name="2880x1620_mountains.jpeg"
      alt="mountains obscured by fog"
    />

    <BaseDiv type="fullwidth--beige">
      <Text
        headline="Lorem Ipsum"
        :copy="$t('etc')"
      ></Text>
    </BaseDiv>
</template>

