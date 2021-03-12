import { m } from "framer-motion";
import { Box } from "../";
import { Flex } from "../flex";
import { MultiColumnLayout, LinkProps } from "../";
import Pokeball from "./pokeball.svg";
import { FiHome, FiSearch, FiUpload, FiUser } from "react-icons/fi";

export default {
    title: "Layouts",
};

const links: LinkProps[] = [
    { text: "Home", icon: FiHome, as: "a", to: "/", active: true },
    { text: "Search", icon: FiSearch, as: "a", to: "/search", active: false },
    { text: "Lobby", icon: FiUser, as: "a", to: "/lobby", active: false },
    { text: "Decks", icon: FiUpload, as: "a", to: "/decks", active: false },
];

const Logo = (
    <Flex
        _css={{ height: "3rem", m: 3, display: ["none", "none", "flex"] }}
        centered
    >
        <Box
            as="img"
            src={Pokeball}
            _css={{
                display: "inline-block",
                height: "100%",
                mr: 3,
                opacity: 0.7,
                transform: "rotate(-1deg)",
            }}
        />
        <Box
            as="h2"
            _css={{
                fontStyle: "italic",
                letterSpacing: "-.05em",
                color: "error.300",
                fontWeight: 900,
            }}
        >
            pkmntcg.xyz
        </Box>
    </Flex>
);

const accountBox = (
    <Flex
        _css={{
            mt: "auto",
            borderTop: "solid 1px",
            borderColor: "background.900",
            // bg: "background.900",
            // color: "background.500",
            ml: ["auto", "auto", 0],
            p: 3,
            fontSize: ".5rem",

            alignItems: "center",
        }}
    >
        <Flex
            _css={{
                bg: "text.a100",
                height: [36, 48, 64],
                width: [36, 48, 64],
                mr: [2, 3],
                borderRadius: "50%",
            }}
            centered
        >
            <Box
                as={FiUser}
                _css={{
                    height: [16, 24, 48],
                    width: [16, 24, 48],
                    opacity: 0.7,
                }}
            />
        </Flex>
        <Box _css={{ fontSize: "xs", opacity: 0.8 }}>
            <Box textStyle="label" _css={{ mb: 1 }}>
                Kyle Thomas
            </Box>
            <Box as="a" href="/settings" _css={{ display: "inline" }}>
                Settings
            </Box>
            {` | `}
            <Box as="a" href="/logout" _css={{ display: "inline" }}>
                Logout
            </Box>
        </Box>
    </Flex>
);

export const multiColumnLayout = () => (
    <MultiColumnLayout
        logo={Logo}
        links={links}
        _css={{ m: -3, height: "100vh" }}
        navFooter={accountBox}
    >
        <Box
            _css={{
                flexGrow: 1,
                p: 3,
                mb: 3,
                color: "text.500",
                // overflowY: "auto",
                li: {
                    ml: 4,
                },
            }}
        >
            <h2>Welcome!</h2>
            <hr />
            <p>
                Within the English-speaking world, association football is now
                usually called "football" in the United Kingdom and mainly
                "soccer" in Canada and the United States. People in countries
                where other codes of football are prevalent (Australia, Ireland,
                Wales, South Africa and New Zealand) may use either term,
                although national associations in Australia and New Zealand now
                primarily use "football" for the formal name.
            </p>

            <p>
                Kicking ball games arose independently multiple times across
                multiple cultures. According to FIFA, the Chinese competitive
                game cuju (蹴鞠, literally "kick ball") is the earliest form of
                football for which there is evidence.
            </p>

            <p>Other games included kemari in Japan and chuk-guk in Korea.</p>

            <p>
                Association football in itself does not have a classical
                history.
            </p>

            <p>
                The world's oldest football competition is the FA Cup, which was
                founded by C.W. Alcock and has been contested by English teams
                since 1872. The first official international football match also
                took place in 1872, between Scotland and England in Glasgow,
                again at the instigation of C.W. Alcock. England is also home to
                the world's first football league, which was founded in
                Birmingham in 1888 by Aston Villa director William McGregor.
            </p>
            <li>
                Association football in itself does not have a classical
                history.
            </li>

            <li>
                The world's oldest football competition is the FA Cup, which was
                founded by C.W. Alcock and has been contested by English teams
                since 1872. The first official international football match also
                took place in 1872, between Scotland and England in Glasgow,
                again at the instigation of C.W. Alcock. England is also home to
                the world's first football league, which was founded in
                Birmingham in 1888 by Aston Villa director William McGregor.
            </li>

            <li>
                Football is played at a professional level all over the world.
                Millions of people regularly go to football stadiums to follow
                their favourite teams,
            </li>

            <li>
                Women may have been playing "football" for as long as the game
                has existed. Evidence shows that an ancient version of the game
                (Tsu Chu) was played by women during the Han Dynasty (25–220
                CE). Two female figures are depicted in Han Dynasty (25–220 CE)
                frescoes, playing Tsu Chu.
            </li>

            <li>
                Association football, the modern game, also has documented early
                involvement of women. An annual competition in Mid-Lothian,
                Scotland during the 1790s is reported, too.
            </li>
        </Box>
    </MultiColumnLayout>
);
