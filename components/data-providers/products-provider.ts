import { MenuItemType } from "@/components/elements/menu";
import { error } from "console";


export function getProduct(products: MenuItemType[], id: typeof productsList[number]['id']) {
    const product = products.find((product) => product.id === id);

    if (product === undefined) throw Error(id + 'no such product');
    return product
}

//TODO: sort out Types here
export const productsList: MenuItemType[] = [
    {
        id: "rice-mrv",
        label: "Sustainable Agriculture",
        description: "Sustainable Agriculture",
        url: "/rice-mrv",
        order: 1,
        // description: "Generate investment-grade MRV reports for rice cultivation. Meet exporter requirements, prepare for CBAM, and unlock new revenue from the carbon markets.",
        full_description: "Generate investment-grade MRV reports for rice cultivation. Meet exporter requirements, prepare for CBAM, and unlock new revenue from the carbon markets.",
        cta: "Explore Rice MRV Solution",
        img: { src: "/product-invoicing.png" }
    },
    {
        id: "deforestation-free",
        label: "Deforestation-Free Supply Chains",
        description: "Deforestation-Free Supply Chains",
        url: "/deforestation-free",
        order: 2,
        // description: "Ensure compliance with the EU Deforestation Regulation (EUDR). Monitor your palm oil, rubber, and coffee supply chains with precision land-use intelligence.",
        full_description: "Ensure compliance with the EU Deforestation Regulation (EUDR). Monitor your palm oil, rubber, and coffee supply chains with precision land-use intelligence.",
        cta: "Learn More",
        img: { src: "/product-e-commerce.png" }
    },
    {
        id: "nature-based",
        label: "Nature-Based Solutions & Carbon Markets",
        description: "Nature-Based Solutions & Carbon Markets",
        url: "/nature-based",
        order: 3,
        // description: "Accurately quantify sequestration for blue carbon projects. We provide the verifiable data needed to issue high-quality credits for mangrove restoration.",
        full_description: "Accurately quantify sequestration for blue carbon projects. We provide the verifiable data needed to issue high-quality credits for mangrove restoration.",
        cta: "Learn More",
        img: { src: "/product-app.png" }
    },
    // {
    //     id: "rice-mrv",
    //     label: "Sustainable Agriculture",
    //     url: "/rice-mrv",
    //     order: 1,
    //     description: "Generate investment-grade MRV reports for rice cultivation. Meet exporter requirements, prepare for CBAM, and unlock new revenue from the carbon markets.",
    //     full_description: "Generate investment-grade MRV reports for rice cultivation. Meet exporter requirements, prepare for CBAM, and unlock new revenue from the carbon markets.",
    //     cta: "Explore Rice MRV Solution",
    //     img: { src: "/product-invoicing.png" }
    // },
    // {
    //     id: "deforestation-free",
    //     label: "Deforestation-Free Supply Chains",
    //     url: "/deforestation-free",
    //     order: 2,
    //     description: "Ensure compliance with the EU Deforestation Regulation (EUDR). Monitor your palm oil, rubber, and coffee supply chains with precision land-use intelligence.",
    //     full_description: "Ensure compliance with the EU Deforestation Regulation (EUDR). Monitor your palm oil, rubber, and coffee supply chains with precision land-use intelligence.",
    //     cta: "Learn More",
    //     img: { src: "/product-e-commerce.png" }
    // },
    // {
    //     id: "nature-based",
    //     label: "Nature-Based Solutions & Carbon Markets",
    //     url: "/nature-based",
    //     order: 3,
    //     description: "Accurately quantify sequestration for blue carbon projects. We provide the verifiable data needed to issue high-quality credits for mangrove restoration.",
    //     full_description: "Accurately quantify sequestration for blue carbon projects. We provide the verifiable data needed to issue high-quality credits for mangrove restoration.",
    //     cta: "Learn More",
    //     img: { src: "/product-app.png" }
    // }

]