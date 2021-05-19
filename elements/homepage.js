import { html } from "../gaslight.js";
import { Layout } from "./layout.js";

export const HomePage = (props) =>
  html`<${Layout}
    ...${{
      ...props,
      scripts: [
        "https://unpkg.com/web3@1.3.6/dist/web3.min.js",
        "https://unpkg.com/web3modal@1.9.0/dist/index.js",
        "https://unpkg.com/evm-chains@0.2.0/dist/umd/index.min.js",
        "https://unpkg.com/@walletconnect/web3-provider@1.2.1/dist/umd/index.min.js",
        "https://unpkg.com/fortmatic@2.0.6/dist/fortmatic.js",
      ],
      modules: ["js/script.js"],
    }}
  >
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>Web3modal example for vanilla JavaScript and HTML</h1>
          <p>
            No wallet connected. Connect wallet to show accounts and their ETH
            balances.
          </p>
          <div
            class="alert alert-danger"
            id="alert-error-https"
            style="display: none"
          >
            You can run this example only over HTTPS connection.
          </div>

          <div id="prepare">
            <button class="btn btn-primary" id="btn-connect">
              Connect wallet
            </button>
          </div>

          <div id="connected" style="display: none">
            <button class="btn btn-primary" id="btn-disconnect">
              Disconnect wallet
            </button>

            <hr />

            <div id="network">
              <p>
                <strong>Connected blockchain:</strong>
                <span id="network-name"></span>
              </p>

              <p>
                <strong>Selected account:</strong>
                <span id="selected-account"></span>
              </p>
            </div>

            <hr />

            <h3>All account balances</h3>

            <table class="table table-listing">
              <thead>
                <th>Address</th>
                <th>ETH balance</th>
                <th>FAU balance</th>
              </thead>

              <tbody id="accounts"></tbody>
            </table>

            <p>
              Please try to switch between different accounts in your wallet if
              your wallet supports this functonality.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- We use simple <template> templating for the example -->
    <div id="templates" style="display: none">
      <template id="template-balance">
        <tr>
          <th class="address"></th>
          <td class="balance"></td>
          <td class="fau"></td>
        </tr>
      </template>
    </div>
  <//>`;
