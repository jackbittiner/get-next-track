import React from "react";
import { mount } from "enzyme";
import { CHANGE_TRACK } from "./change-track";
import Track from "./index";
import { MockedProvider } from "@apollo/react-testing";
import wait from "waait";
import { ApolloClient } from "apollo-boost";

describe("Track", () => {
  it("should play a new track when clicked", async () => {
    let lazyQueryCalled = false;

    const mocks = [
      {
        request: {
          query: CHANGE_TRACK,
          variables: {
            trackUri: "asdfgh12",
            deviceId: "12345asdfgh",
          },
        },
        result: () => {
          lazyQueryCalled = true;
          return {
            data: {
              playTrack: {
                status: "success",
                trackUri: "asdfgh12",
                deviceId: "12345asdfgh",
              },
            },
          };
        },
      },
    ];

    const component = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Track
          track={{
            id: "12345",
            name: "song",
            artist: "artist",
            uri: "asdfgh12",
          }}
          deviceId={"12345asdfgh"}
          trackTypeGA={"givenGAType"}
          client={{} as ApolloClient<any>}
        />
      </MockedProvider>
    );

    const button = component.find("button");
    button.simulate("click");

    await wait(0);
    component.update();
    expect(lazyQueryCalled).toBe(true);
  });
});
