import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsAboutSmall extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_smalls';
  info: {
    description: '';
    displayName: 'AboutSmall';
    icon: 'book';
  };
  attributes: {
    cta: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'/about'>;
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    heading: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Meet our bakers'>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    sectionCategory: Schema.Attribute.Component<
      'sections.section-category',
      false
    > &
      Schema.Attribute.Required;
  };
}

export interface SectionsFeatured extends Struct.ComponentSchema {
  collectionName: 'components_sections_featureds';
  info: {
    description: '';
    displayName: 'Featured';
    icon: 'dashboard';
  };
  attributes: {
    heading: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Featured on...'>;
    logoImages: Schema.Attribute.Media<'images', true> &
      Schema.Attribute.Required;
    sectionCategory: Schema.Attribute.Component<
      'sections.section-category',
      false
    > &
      Schema.Attribute.Required;
  };
}

export interface SectionsRecipeList extends Struct.ComponentSchema {
  collectionName: 'components_sections_recipe_lists';
  info: {
    description: '';
    displayName: 'RecipeList';
    icon: 'apps';
  };
  attributes: {
    cta: Schema.Attribute.String & Schema.Attribute.DefaultTo<'/recipes'>;
    heading: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Top recipes'>;
    recipes: Schema.Attribute.Relation<'oneToMany', 'api::recipe.recipe'>;
    sectionCategory: Schema.Attribute.Component<
      'sections.section-category',
      false
    > &
      Schema.Attribute.Required;
  };
}

export interface SectionsSectionCategory extends Struct.ComponentSchema {
  collectionName: 'components_sections_section_categories';
  info: {
    description: '';
    displayName: 'sectionCategory';
    icon: 'bulletList';
  };
  attributes: {
    sectionCategory: Schema.Attribute.Enumeration<
      ['hero', 'recipeList', 'aboutSmall', 'featured']
    > &
      Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.about-small': SectionsAboutSmall;
      'sections.featured': SectionsFeatured;
      'sections.recipe-list': SectionsRecipeList;
      'sections.section-category': SectionsSectionCategory;
    }
  }
}
